import { apiClient } from "./apiConfig";

/**
 * Fetch film details from the API, optionally filtered by eventive tags.
 * @param {number} perPage - Number of items per page.
 * @param {number} page - Page number to fetch.
 * @param {number} year - Year of the festival.
 * @param {string} [eventiveTag] - Optional eventive tag to filter results.
 * @returns {Promise<Object[]>} - A promise that resolves to the response data.
 */

export const getFilmData = async (
  perPage = 18,
  page = 1,
  year = 2024,
  eventiveTag
) => {
  const params = {
    per_page: perPage,
    page: page,
    _year: year,
    rich: 1,
    not_hidden: 1,
  };

  if (eventiveTag) {
    params["eventive-tag"] = eventiveTag;
  }

  try {
    const response = await apiClient.get("/wp-json/wp/v2/festival-film", {
      params,
    });
    return response.data;
  } catch (err) {
    console.error(`Error fetching film details: ${err.message}`);
    throw new Error(`Error fetching film details: ${err.message}`);
  }
};
