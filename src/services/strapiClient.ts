const normalizeBaseUrl = (url: string) => url.replace(/\/+$/, "");

const baseUrl = normalizeBaseUrl(
  process.env.REACT_APP_STRAPI_URL ?? "http://localhost:1337",
);

const token = process.env.REACT_APP_STRAPI_TOKEN;

type RequestParams = Record<string, string | undefined>;

const buildUrl = (endpoint: string, params?: RequestParams) => {
  const trimmed = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  const url = new URL(`${baseUrl}${trimmed}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        url.searchParams.set(key, value);
      }
    });
  }

  if (!url.searchParams.has("populate")) {
    url.searchParams.set("populate", "deep");
  }

  return url.toString();
};

export const strapiGet = async <T>(
  endpoint: string,
  params?: RequestParams,
): Promise<T> => {
  const response = await fetch(buildUrl(endpoint, params), {
    headers: {
      Accept: "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(
      `Strapi request failed: ${response.status} ${response.statusText} ${message}`,
    );
  }

  return (await response.json()) as T;
};

export const buildMediaUrl = (url?: string | null) => {
  if (!url) {
    return undefined;
  }

  if (url.startsWith("http")) {
    return url;
  }

  return `${baseUrl}${url}`;
};

