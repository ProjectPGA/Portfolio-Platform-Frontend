import { Actions } from 'vuex-smart-module';
import NavigationState from './NavigationState';
import NavigationMutations from './NavigationMutations';
import NavigationGetters from './NavigationGetters';

export default class NavigationActions extends Actions<
    NavigationState,
    NavigationGetters,
    NavigationMutations,
    NavigationActions
> {
    public openLeftMenu(): void {
        this.commit('openLeftMenu');
    }
    public closeLeftMenu(): void {
        this.commit('closeLeftMenu');
    }
    public openCssDisplayMenu(): void {
        this.dispatch('colseAllCssMenus');
        this.commit('openCssDisplayMenu');
    }
    public closeCssDisplayMenu(): void {
        this.commit('closeCssDisplayMenu');
    }
    public openCssPositionMenu(): void {
        this.dispatch('colseAllCssMenus');
        this.commit('openCssPositionMenu');
    }
    public closeCssPositionMenu(): void {
        this.commit('closeCssPositionMenu');
    }
    public openCssBackgroundImageMenu(): void {
        this.dispatch('colseAllCssMenus');
        this.commit('openCssBackgroundImageMenu');
    }
    public closeCssBackgroundImageMenu(): void {
        this.commit('closeCssBackgroundImageMenu');
    }
    public openJavascriptArrayMenu(): void {
        this.dispatch('colseAllJavascriptMenus');
        this.commit('openJavascriptArrayMenu');
    }
    public closeJavascriptArrayMenu(): void {
        this.commit('closeJavascriptArrayMenu');
    }
    public openJavascriptStringMethodsMenu(): void {
        this.dispatch('colseAllJavascriptMenus');
        this.commit('openJavascriptStringMethodsMenu');
    }
    public closeJavascriptStringMethodsMenu(): void {
        this.commit('closeJavascriptStringMethodsMenu');
    }
    public colseAllCssMenus(): void {
        this.dispatch('closeCssBackgroundImageMenu');
        this.dispatch('closeCssPositionMenu');
        this.dispatch('closeCssDisplayMenu');
    }
    public colseAllJavascriptMenus(): void {
        this.dispatch('closeJavascriptArrayMenu');
        this.dispatch('closeJavascriptStringMethodsMenu');
    }
}
