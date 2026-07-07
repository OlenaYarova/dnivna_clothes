// src/declarations.d.ts

declare module "modern-normalize";

declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}
