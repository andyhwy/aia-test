import useSWR from 'swr';
// Mock network delay for loading animation
const fetcher = (url) =>
  fetch(url).then(
    (res) =>
      new Promise((resolve) => setTimeout(() => resolve(res.json()), 1000)),
  );

export function useGetRewards(language) {
  const {data, error} = useSWR(
    `https://www.aia.com.hk/content/dam/hk-vitality/clientlibs/testjson/rewardsConfig${
      language === 'en' ? '' : '-zh-hk'
    }.json`,
    fetcher,
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
