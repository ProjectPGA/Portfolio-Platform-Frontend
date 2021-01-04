import { Mutations } from 'vuex-smart-module';
import NavigationState from './NavigationState';

export default class NavigationMutations extends Mutations<NavigationState> {
    public openLeftMenu(): void {
        this.state.isShowLeftMenu = true;
    }
    public closeLeftMenu(): void {
        this.state.isShowLeftMenu = false;
    }
    public openCssDisplayMenu(): void {
        this.state.isShowCssDisplayMenu = true;
    }
    public closeCssDisplayMenu(): void {
        this.state.isShowCssDisplayMenu = false;
    }
    public openCssPositionMenu(): void {
        this.state.isShowCssPositionMenu = true;
    }
    public closeCssPositionMenu(): void {
        this.state.isShowCssPositionMenu = false;
    }
    public openCssBackgroundImageMenu(): void {
        this.state.isShowCssBackgroundImageMenu = true;
    }
    public closeCssBackgroundImageMenu(): void {
        this.state.isShowCssBackgroundImageMenu = false;
    }
    public openJavascriptArrayMenu(): void {
        this.state.isShowJavascriptArrayMenu = true;
    }
    public closeJavascriptArrayMenu(): void {
        this.state.isShowJavascriptArrayMenu = false;
    }
    public openJavascriptStringMethodsMenu(): void {
        this.state.isShowJavascriptStringMethodsMenu = true;
    }
    public closeJavascriptStringMethodsMenu(): void {
        this.state.isShowJavascriptStringMethodsMenu = false;
    }
}
