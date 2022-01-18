module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ff1e32a0501172d75f15e32592264c01'),
  },
});
