const unify = async requests => {
  try {
    const data = await requests;

    const links = data[0].data.entry;
    const videos = data[1].data.entry;
    return [...links, ...videos];
  } catch (errors) {
    return errors.response;
  }
};

export default unify;
