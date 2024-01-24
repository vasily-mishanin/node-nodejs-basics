const parseEnv = () => {
  const rssVars = Object.entries(process.env).filter((entry) =>
    entry[0].startsWith('RSS_')
  );
  console.log(rssVars.map(([key, value]) => `${key}=${value};`).join(' '));
};

parseEnv();
