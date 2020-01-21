const getScrollPercent = () => {
  const html = document.documentElement;
  const body = document.body;
  return (
    ((html.scrollTop || body.scrollTop) /
      ((html.scrollHeight || body.scrollHeight) - html.clientHeight)) *
    100
  );
};

export default getScrollPercent;
