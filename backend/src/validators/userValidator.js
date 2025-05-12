const { body, validationResult } = require('express-validator');

const validateUser = [
  body('user').isString().notEmpty(),
  body('interest').isArray({ min: 1 }),
  body('age').isInt({ min: 0 }),
  body('mobile').isNumeric(),
  body('email').isEmail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  },
];

module.exports = validateUser;
