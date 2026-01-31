# Wechat-MiniProgram-ChatGPT

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)
[![License](http://img.shields.io/:license-apache-brightgreen.svg)](https://github.com/Json031/Wechat-MiniProgram-ChatGPT/blob/main/LICENSE)
![WeChat Developer Tools](https://img.shields.io/badge/WeChatDeveloperTools-1.06.2409140-blue)
![WeChat Mini Program Base Library](https://img.shields.io/badge/WeChatMiniProgramBaseLibrary-2.19.4-brightgreen)

---

## 🌍 Language / 语言选择
<a name="top"></a>

**[English](#english)** | **[中文](#中文)**

---

## 📖 English
<a name="english"></a>

### Overview

An open-source WeChat mini program AI tool developed based on the ChatGPT model. It provides features such as chatbot and drawing assistant, supporting users to communicate with ChatGPT through text and voice. It also includes an image generation function that allows previewing generated images and sharing them with WeChat friends via long press.

### Environment Requirements

* WeChat Developer Tools: 1.06.2409140 Stable
* Base Library: 2.19.4

### Getting Started

#### Building the Project

Use WeChat Developer Tools to build and run the project.

#### Configuration (Important)

**Before running the WeChat mini program, you must replace the following URLs:**

```javascript
const wssurl = "wss://ai.demo.com";
const drawImgUrl = 'https://ai.demo.com/api/T2I_api';
const sttUrl = 'https://ai.demo.com/ASR_api';
```

**Note:** The data protocol of the communication address needs to be consistent. If using different protocols, you'll need to adjust the parsing process accordingly.

### Features

* 💬 **Chat with ChatGPT** - Text-based conversational AI
* 🎤 **Voice Interaction** - Communicate with ChatGPT using voice input
* 🎨 **Image Generation** - AI-powered drawing assistant
* 📤 **Share Images** - Preview and share generated images with WeChat friends

### Effect Demonstration

<p align="center">
  <img width="220" height="478" alt="screenshot-1" src="https://github.com/user-attachments/assets/23dcbc46-392f-439a-ad66-99d866344952" style="border: 2px solid blue;" />
  <img width="220" height="478" alt="screenshot-2" src="https://github.com/user-attachments/assets/33e3a5c6-342d-40a7-a110-1d9fa43fc130" style="border: 2px solid blue;" />
  <img width="220" height="478" alt="screenshot-3" src="https://github.com/user-attachments/assets/3bdcf3ea-3f78-4331-b581-5e4c2ab4f072" style="border: 2px solid blue;" />
</p>

### Demo Videos

**Image Generation and ChatGPT Voice Interaction:**

https://github.com/user-attachments/assets/e0495edd-8351-4b80-906b-83ac93aa2e8d

https://github.com/user-attachments/assets/7f3ad47c-bfbe-462f-a63c-925a172dbfcd

### License

This library is licensed under the [Apache 2.0 License](https://github.com/Json031/Wechat-MiniProgram-ChatGPT/blob/main/LICENSE).

---

## 📖 中文
<a name="中文"></a>

### 项目简介

基于 ChatGPT 模型开发的 AI 工具微信小程序开源项目，提供聊天机器人、绘画助手等功能，支持用户通过文本和语音与 ChatGPT 交流，并且还具备画图功能，支持预览绘制的图片并可长按发送给微信好友。

### 环境要求

* 微信开发者工具：1.06.2409140 Stable
* 调试基础库：2.19.4

### 快速开始

#### 构建项目

使用微信开发者工具构建和运行项目。

#### 配置说明（重要）

**在运行微信小程序之前，请替换以下 URL 地址：**

```javascript
const wssurl = "wss://ai.demo.com";
const drawImgUrl = 'https://ai.demo.com/api/T2I_api';
const sttUrl = 'https://ai.demo.com/ASR_api';
```

**注意：** 通信地址的数据协议需要保持一致，否则需要调整解析过程。

### 功能特性

* 💬 **ChatGPT 对话** - 基于文本的对话式 AI
* 🎤 **语音交互** - 使用语音输入与 ChatGPT 交流
* 🎨 **图像生成** - AI 驱动的绘画助手
* 📤 **分享图片** - 预览并分享生成的图片给微信好友

### 效果演示

<p align="center">
  <img width="220" height="478" alt="截图-1" src="https://github.com/user-attachments/assets/23dcbc46-392f-439a-ad66-99d866344952" style="border: 2px solid blue;" />
  <img width="220" height="478" alt="截图-2" src="https://github.com/user-attachments/assets/33e3a5c6-342d-40a7-a110-1d9fa43fc130" style="border: 2px solid blue;" />
  <img width="220" height="478" alt="截图-3" src="https://github.com/user-attachments/assets/3bdcf3ea-3f78-4331-b581-5e4c2ab4f072" style="border: 2px solid blue;" />
</p>

### 演示视频

**图像生成和 ChatGPT 语音交互：**

https://github.com/user-attachments/assets/e0495edd-8351-4b80-906b-83ac93aa2e8d

https://github.com/user-attachments/assets/7f3ad47c-bfbe-462f-a63c-925a172dbfcd

### 许可证

本项目基于 [Apache 2.0 License](https://github.com/Json031/Wechat-MiniProgram-ChatGPT/blob/main/LICENSE) 开源协议。

---

**[⬆ Back to Top / 返回顶部](#top)**
