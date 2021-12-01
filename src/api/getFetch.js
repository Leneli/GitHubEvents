async function getFetch(url, params = {}) {
  const urlWithParams = url + '?' + new URLSearchParams(params);

  const response = await fetch(urlWithParams, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  });
  const json = await response.json();

  return {
    ok: response.ok,
    data: json,
  };
}

export { getFetch };
