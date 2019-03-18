export interface SideNavMenu {
    displayName: string;
    disabled?: boolean;
    iconName: string;
    route?: string;
    children?: SideNavMenu[];
}