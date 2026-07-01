export const NAV_MENU_CLOSE_DELAY_MS = 300;
export const NAV_MENU_HOVER_BRIDGE_PX = 40;

export type NavMenuHoverHandlers = {
  cancelCloseMenu: () => void;
  scheduleCloseMenu: () => void;
};
