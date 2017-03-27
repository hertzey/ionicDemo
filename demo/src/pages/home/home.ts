import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ViewController } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController ,
    public viewCtrl: ViewController ,
    public actionSheetCtrl: ActionSheetController
  ) {}
 
 // 操作表组件
  openMenu() {
   let actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }

  /*ngOnInit(){ //暂时不知道干什么用
   console.log("HomePage on init");
  }*/


  // 生命周期函数 
  /*ionViewWillLoad(){ // 将要加载
    console.log("HomePage page will load");
  }
  ionViewDidLoad(){ // 已经加载
    console.log("HomePage page did load");
  }
  ionViewWillEnter() { //将要进入 用来做页面初始化操作
    console.log("HomePage page will enter");
  }
  ionViewDidEnter(){ // 已经进入
    console.log("HomePage page did enter");
  }
  ionViewWillLeave(){
    console.log("HomePage page will leave");
  }
  ionViewDidLeave(){
    console.log("HomePage page did leave");
  }
  ionViewWillUnload(){ // 在页面即将被销毁并且其元素已删除时运行。
    console.log("页面即将销毁");
  }
  ionViewCanEnter(){ // 在视图可以进入之前运行。这可以在认证视图中用作一种“保护”，您需要在视图进入之前检查权限
    console.log("进入之前");
  }
  ionViewCanLeave(){ // 在视图可以离开之前运行。这可以在认证视图中用作一种“保护”，您需要在视图离开之前检查权限
    console.log("离开之前");
  }*/


}
