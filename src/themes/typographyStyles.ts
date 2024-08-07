const typography = {
  family: {
    primary: 'Figtree, Arial',
  },
  weights: {
    regular: 400,
    bold: 600,
  },
  size: {
    xxs: '0.75rem',
    xs: '0.875rem',
    s: '0.9375rem',
    m: '1.0625rem',
    l: '1.25rem',
    xl: '1.375rem',
    xxl: '1.625rem',
    xxxl: '2rem',
    xxxxl: '2.25rem',
  },
  lineheight: {
    xxs: '1rem',
    xs: '1rem',
    s: '1.5rem',
    m: '1.5rem',
    l: '1.5rem',
    xl: '1.75rem',
    xxl: '2rem',
    xxxl: '2.5rem',
    xxxxl: '2.75rem',
  },
  letterSpacing: {
    xxs: '0.03rem',
    xs: '0rem',
    s: '0rem',
    m: '0rem',
    l: '-0.00125rem',
    xl: '-0.00138rem',
    xxl: '-0.00325',
    xxxl: '-0.006rem',
    xxxxl: '-0.0125rem',
  },
}

const { family, weights, size, lineheight, letterSpacing } = typography

// Styles object

export const typographyStyles = {
  h1: {
    fontFamily: family.primary,
    fontSize: size.xxxxl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxxxl,
    letterSpacing: letterSpacing.xxxxl,
    textTransform: 'none',
  },
  h2: {
    fontFamily: family.primary,
    fontSize: size.xxxl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxxl,
    letterSpacing: letterSpacing.xxxl,
    textTransform: 'none',
  },
  h3: {
    fontFamily: family.primary,
    fontSize: size.xxl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxl,
    letterSpacing: letterSpacing.xxl,
    textTransform: 'none',
  },
  h4: {
    fontFamily: family.primary,
    fontSize: size.xl,
    fontWeight: weights.bold,
    lineHeight: lineheight.xl,
    letterSpacing: letterSpacing.xl,
    textTransform: 'none',
  },
  h5: {
    fontFamily: family.primary,
    fontSize: size.l,
    fontWeight: weights.bold,
    lineHeight: lineheight.l,
    letterSpacing: letterSpacing.l,
    textTransform: 'none',
  },
  body: {
    fontFamily: family.primary,
    fontSize: size.m,
    fontWeight: weights.regular,
    lineHeight: lineheight.m,
    letterSpacing: letterSpacing.m,
    textTransform: 'none',
  },
  bodyBold: {
    fontFamily: family.primary,
    fontSize: size.m,
    fontWeight: weights.bold,
    lineHeight: lineheight.m,
    letterSpacing: letterSpacing.m,
    textTransform: 'none',
  },
  small: {
    fontFamily: family.primary,
    fontSize: size.s,
    fontWeight: weights.regular,
    lineHeight: lineheight.s,
    letterSpacing: letterSpacing.s,
    textTransform: 'none',
  },
  smallBold: {
    fontFamily: family.primary,
    fontSize: size.s,
    fontWeight: weights.bold,
    lineHeight: lineheight.s,
    letterSpacing: letterSpacing.s,
    textTransform: 'none',
  },
  caption: {
    fontFamily: family.primary,
    fontSize: size.xs,
    fontWeight: weights.regular,
    lineHeight: lineheight.xs,
    letterSpacing: letterSpacing.xs,
    textTransform: 'none',
  },
  overline: {
    fontFamily: family.primary,
    fontSize: size.xxs,
    fontWeight: weights.bold,
    lineHeight: lineheight.xxs,
    letterSpacing: letterSpacing.xxs,
    textTransform: 'uppercase',
  },
} as const

// export type StyleKeys = keyof typeof typographyStyles
