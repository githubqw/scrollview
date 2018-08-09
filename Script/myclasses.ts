// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class myclasses extends cc.Component {
    orgpositionx = null;
    movenposx = null;
    orgpositionmoven = null;
    Downpres: boolean;
    Upres: boolean;
    item1nd = null;
    item2nd: any;
    item3nd: any;
    @property(cc.ScrollView)
    scrollView: cc.ScrollView = null;

    onLoad() {
        this.Downpres = true;
        this.Upres = true;

        var size = this.node.getChildByName("view").getChildByName("content").getContentSize();
        var sizew = size.width;
        var sizeh = size.height;
        this.node.getChildByName("view").getChildByName("content").setPosition(sizew / 3, 0);
        this.item1nd = this.node.getChildByName("view").getChildByName("content").getChildByName("item1");
        this.item2nd = this.node.getChildByName("view").getChildByName("content").getChildByName("item2");
        this.item3nd = this.node.getChildByName("view").getChildByName("content").getChildByName("item3");

        this.oneventDown();
        this.oneventDown2();
        this.oneventDown3();
    }
    //第一个按钮事件
    oneventDown() {
        this.node.getChildByName("view").getChildByName("content").getChildByName("item1").on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("cc.Node.EventType.TOUCH_START");
            this.Downpres = false;
            var btn = this.node.getChildByName("view").getChildByName("content");
            this.orgpositionx = btn.getPosition().x;
        }, this);

        this.node.getChildByName("view").getChildByName("content").getChildByName("item1").on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            console.log("cc.Node.EventType.TOUCH_MOVE");
            this.Upres = false;
            var btn = this.node.getChildByName("view").getChildByName("content");
            this.orgpositionmoven = btn.getPosition().x;
        }, this);
        this.node.getChildByName("view").getChildByName("content").getChildByName("item1").on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("cc.Node.EventType.TOUCH_END");
            //如果向左移动
            if (this.Downpres == false && this.Upres == false && this.orgpositionmoven - this.orgpositionx < 0) {
                this.Downpres = true;
                this.Upres = true;
                this.scrollView.scrollToPercentHorizontal(0.5, 0.5);
            }
        }, this);
        // this.node.getChildByName("view").getChildByName("content").getChildByName("item1").on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
        //     event.stopPropagation();
        //     console.log("cc.Node.EventType.TOUCH_CANCEL");
        //     if (this.Downpres == false && this.Upres == false && this.orgpositionmoven - this.orgpositionx < 0) {
        //         this.Downpres = true;
        //         this.Upres = true;
        //         this.scrollView.scrollToPercentHorizontal(0.5, 0.5);
        //     }
        // }, this);

    }
    //第二个按钮事件
    oneventDown2() {
        this.node.getChildByName("view").getChildByName("content").getChildByName("item2").on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("cc.Node.EventType.TOUCH_START2");
            this.Downpres = false;
            var btn = this.node.getChildByName("view").getChildByName("content");
            this.orgpositionx = btn.getPosition().x;
        }, this);

        this.node.getChildByName("view").getChildByName("content").getChildByName("item2").on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            console.log("cc.Node.EventType.TOUCH_MOVE2");
            this.Upres = false;
            var btn = this.node.getChildByName("view").getChildByName("content");
            this.movenposx = btn.getPosition().x;
        }, this);
        this.node.getChildByName("view").getChildByName("content").getChildByName("item2").on(cc.Node.EventType.TOUCH_END, function (event) {
            console.log("cc.Node.EventType.TOUCH_END2");
            //如果向左移动
            if (this.Downpres == false && this.Upres == false && this.movenposx - this.orgpositionx < 0) {
                this.Downpres = true;
                this.Upres = true;
                this.scrollView.scrollToPercentHorizontal(1, 0.5);
            }
            //如果向右移动
            else if (this.Downpres == false && this.Upres == false && this.movenposx - this.orgpositionx > 0) {
                this.Downpres = true;
                this.Upres = true;
                this.scrollView.scrollToPercentHorizontal(0, 0.5);
            }
            else {
                this.Downpres = true;
                this.Upres = true;
                return;
            }
        }, this);
        // this.node.getChildByName("view").getChildByName("content").getChildByName("item2").on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
        //     console.log("cc.Node.EventType.TOUCH_CANCEL");
        //     //如果向左移动
        //     if (this.Downpres == false && this.Upres == false && this.movenposx - this.orgpositionx < 0) {
        //         this.Downpres = true;
        //         this.Upres = true;
        //         this.scrollView.scrollToPercentHorizontal(1, 0.5);
        //     }
        //     //如果向右移动
        //     else if (this.Downpres == false && this.Upres == false && this.movenposx - this.orgpositionx > 0) {
        //         this.Downpres = true;
        //         this.Upres = true;
        //         this.scrollView.scrollToPercentHorizontal(0, 0.5);
        //     }
        //     else {
        //         this.Downpres = true;
        //         this.Upres = true;
        //         return;
        //     }
        // }, this);
    }
    //第三个按钮事件
    oneventDown3() {
        this.node.getChildByName("view").getChildByName("content").getChildByName("item3").on(cc.Node.EventType.TOUCH_START, function (event) {
            console.log("cc.Node.EventType.TOUCH_START3");
            this.Downpres = false;
            var btn = this.node.getChildByName("view").getChildByName("content");
            console.log(btn.getPosition());
            this.orgpositionx = btn.getPosition().x;
        }, this);
        this.node.getChildByName("view").getChildByName("content").getChildByName("item3").on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            console.log("cc.Node.EventType.TOUCH_MOVE3");
            this.Upres = false;
            var btn = this.node.getChildByName("view").getChildByName("content");
            this.movenposx = btn.getPosition().x;
        }, this);

        this.node.getChildByName("view").getChildByName("content").getChildByName("item3").on(cc.Node.EventType.TOUCH_END, function (event) {
            //如果向右移动
            console.log("cc.Node.EventType.TOUCH_END3");
            if (this.Downpres == false && this.Upres == false && this.movenposx - this.orgpositionx > 0) {
                this.Downpres = true;
                this.Upres = true;
                this.scrollView.scrollToPercentHorizontal(0.5, 0.5);
            }
            else {
                this.Downpres = true;
                this.Upres = true;
                return;
            }
        }, this);

        // this.node.getChildByName("view").getChildByName("content").getChildByName("item3").on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
        //     console.log("cc.Node.EventType.TOUCH_CANCEL");
        //     if (this.Downpres == false && this.Upres == false && this.movenposx - this.orgpositionx > 0) {
        //         this.Downpres = true;
        //         this.Upres = true;
        //         this.scrollView.scrollToPercentHorizontal(0.5, 0.5);
        //     }
        //     else {
        //         this.Downpres = true;
        //         this.Upres = true;
        //         return;
        //     }
        // }, this);
    }


}
