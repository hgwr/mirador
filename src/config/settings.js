export default {
  canvasNavigation: {
    height: 100,
  },
  theme: { // Sets up a MaterialUI theme. See https://material-ui.com/customization/default-theme/
    palette: {
      type: 'light', // dark also available
    },
    typography: {
      useNextVariants: true // set so that console deprecation warning is removed
    }
  },
  language: 'en',
  availableLanguages: { // All the languages available in the language switcher
    de: 'Deutsch',
    en: 'English',
  },
  translations: {
  },
  window: {
    defaultView: 'single',
  },
  windows: [],
  thumbnailNavigation: {
    defaultPosition: 'bottom',
    height: 150,
  },
  workspace: {
    type: 'mosaic',
  },
  workspaceControlPanel: {
    enabled: true,
  }
};
