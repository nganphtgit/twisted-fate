export function getAuthSession(context) {
  return context.req.session?.user;
};

export function getSession(context) {
  return context.req.session;
};