// The Utopia design-system bundle is a classic script that expects `window` and a global `React`.
// setup.js provides both (also under Node for prerendering) before the bundle is evaluated.
import './setup.js';
import './ds/_ds_bundle.js';

export const DS = globalThis.window.UtopiaLeadGenDesignSystem_f515b4;
