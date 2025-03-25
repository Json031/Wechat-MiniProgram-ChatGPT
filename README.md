![chatgpt小趣言微信小程序4](https://github.com/user-attachments/assets/27c4c19e-bf83-4544-922e-48535ebe8521)# Wechat-MiniProgram-ChatGPT
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

![20250325094756](https://github.com/user-attachments/assets/23dcbc46-392f-439a-ad66-99d866344952)
