一个微信小程序，支持用户通过文本和语音与 ChatGPT 交流，并且还具备画图功能。
A WeChat Mini Program that allows users to chat with ChatGPT using both text and voice input. Additionally, it supports image generation functionality.

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


