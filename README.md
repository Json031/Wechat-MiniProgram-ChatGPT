基于ChatGPT模型开发的AI工具微信小程序，提供聊天机器人、绘画助手等功能，支持用户通过文本和语音与 ChatGPT 交流，并且还具备画图功能，支持预览绘制的图片并可长按发送给微信好友。
WeChat Mini Program, an AI tool developed based on the ChatGPT model, provides functions such as chatbot and drawing assistant. It supports users to communicate with ChatGPT through text and voice, and also has drawing function. It supports previewing drawn images and long pressing to send them to WeChat friends.

## Environment Requirements

* 微信开发者工具1.06.2409140 Stable
* 调试基础库 2.19.4
  
#### Using Wechat developer tool to build the project 使用微信开发者工具构建项目
## Tip 1: Before running the wechat mini program, replace the wssurl and drawImgUrl and sttUrl.
* const wssurl = "wss://ai.demo.com";
* const drawImgUrl = 'https://ai.demo.com/api/T2I_api';
* const sttUrl = 'https://ai.demo.com/ASR_api';

## Tip 2: The data protocol of the communication address needs to be consistent, otherwise the parsing process needs to be adjusted.

## Effect demonstration 效果演示
<p align="center">
  <img src="https://github.com/user-attachments/assets/23dcbc46-392f-439a-ad66-99d866344952" width="300" style="border: 2px solid blue;" />
  <img src="https://github.com/user-attachments/assets/33e3a5c6-342d-40a7-a110-1d9fa43fc130" width="300" style="border: 2px solid blue;" />
  <img src="https://github.com/user-attachments/assets/3bdcf3ea-3f78-4331-b581-5e4c2ab4f072" width="300" style="border: 2px solid blue;" />
  
</p>


## Image generation and ChatGPT voice interaction
https://github.com/user-attachments/assets/e0495edd-8351-4b80-906b-83ac93aa2e8d

https://github.com/user-attachments/assets/7f3ad47c-bfbe-462f-a63c-925a172dbfcd


