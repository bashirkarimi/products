const fetchData = async <T>(
  url: string,
  setState: (data: T) => void
): Promise<void> => {
  try {
    const response = await fetch(url);
    const data: T = await response.json();
    setState(data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    // Handle the error or rethrow if necessary
  }
};

export default fetchData;
