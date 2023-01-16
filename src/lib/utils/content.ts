export const getCustomers = async () => {
  const customers = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/customers/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  customers.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return customers;
};

export const getEducationCustomers = async () => {
  const customers = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/for/education/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  customers.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return customers;
};

export const getGuides = async () => {
  const guides = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/guides/**/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  guides.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return guides;
};

export const getPosts = async () => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob("/src/routes/blog/*.md")).map(
      async ([path, page]) => {
        const { metadata } = await page();
        const filename = path.split("/").pop();
        return { ...metadata, filename };
      }
    )
  );
  posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
  return posts;
};
