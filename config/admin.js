module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6efa6c673de5d6bcb17431c2543a0c69'),
  },
});
