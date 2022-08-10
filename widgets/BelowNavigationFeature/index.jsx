import useSWR, { SWRConfig } from "swr";

const key = "http://localhost:4000/client";
const fetcher = async (input, init) => {
  const res = await fetch(input, init);
  return res.json();
};

const useBreakingNews = () => {
  const { data, mutate, error } = useSWR(key, fetcher, {
    refreshInterval: 4000,
  });
  return {
    data,
    mutate,
    error,
  };
};

const BreakingNews = () => {
	const { data } = useBreakingNews();
	if(data?.result.breakingNews === true) {
		return <div>Breaking News</div>;
	}
  return null;
};

const Articles = () => {
	const { data } = useBreakingNews();
	if(data?.result.breakingNews === false) {
		return <div>Articles</div>;
	}
  return null;
};

const BelowNavigationFeature = ({ serverData }) => {
  return (
    <SWRConfig value={{ fallback: { key: serverData } }}>
      <BreakingNews />
      <Articles />
    </SWRConfig>
  );
};

export { BelowNavigationFeature };
