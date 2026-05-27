export const typography = {
  fontFamily: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semiBold: "Poppins-SemiBold",
    bold: "Poppins-Bold",
  },
  sizes: {
    h1: { fontSize: 32, fontWeight: "700" as const, lineHeight: 1.2 },
    h2: { fontSize: 24, fontWeight: "600" as const, lineHeight: 1.3 },
    h3: { fontSize: 20, fontWeight: "600" as const, lineHeight: 1.3 },
    h4: { fontSize: 16, fontWeight: "500" as const, lineHeight: 1.4 },
    bodyLarge: { fontSize: 16, fontWeight: "400" as const, lineHeight: 1.6 },
    bodyMedium: { fontSize: 14, fontWeight: "400" as const, lineHeight: 1.6 },
    bodySmall: { fontSize: 13, fontWeight: "400" as const, lineHeight: 1.6 },
    caption: { fontSize: 11, fontWeight: "400" as const, lineHeight: 1.4 },
  },
} as const;

export type Typography = typeof typography;
