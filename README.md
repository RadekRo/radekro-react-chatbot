## ChatBot Component Documentation
### Overview
The ChatBot component is a customizable chat interface designed for React applications. It provides an interactive chat experience between the user and a chatbot. The component utilizes several child components and a custom hook to manage the chatbot's state and behavior.

### Features
* __Toggle Visibility:__ Users can open and close the chat window using the open button.
* __Real-time Messaging:__ Supports sending and receiving messages in real time.
* __Scroll to Latest Message:__ Automatically scrolls to the latest message in the chat window.
* __Customizable Theme:__ Allows customization of the chat window appearance and buttons.

### Structure
The ChatBot component comprises the following child components and a custom hook:

* __OpenButton and CloseButton:__ Controls for toggling the visibility of the chat window.
* __SendButton:__ Button for sending messages.
* __ChatWindow:__ The main window where messages are displayed.
* __ChatRow:__ A row within the chat window, representing a single message.
* __Header, Container, Bubble, Footer, Input:__ UI components that structure the chat window and its contents.
* __useChatbot:__ A custom hook that manages the state and logic of the chatbot, including message handling and visibility.

### Setup and Usage
#### Prerequisites
Ensure you have React and its dependencies set up in your project.
#### Integration
Place the ChatBot component and its child components in your project's component directory.
Include the useChatbot hook in your project's hooks directory.
Import and use the ChatBot component in your application as shown below:
```
import React from 'react';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div>
      <ChatBot />
    </div>
  );
}

export default App;
```
#### Styling
The ChatBot component and its child components are styled using the Chatbot.css file. Customize this file to change the appearance of the chat interface.
The theme prop of the OpenButton component can be customized to change its color and background color.
#### Component Props
The main ChatBot component does not require any props for its basic operation. However, child components such as OpenButton, SendButton, and Bubble can be customized through props for different themes or behaviors.

### Functionality
* __Opening/Closing the Chat Window:__ The chat window can be toggled by clicking the open button displayed on the screen. The CloseButton inside the chat window serves the same purpose.
* __Sending Messages:__ Users can type messages in the input field and send them by pressing the send button or hitting the enter key. Messages are then displayed in the chat window.
* __Receiving Messages:__ The useChatbot hook simulates receiving messages from a chatbot. Implement your bot's logic within this hook for dynamic interactions.
* __Custom Hook:__ useChatbot
The useChatbot hook manages the chatbot's state, including message history, input value, and visibility of the chat window. It provides functions for sending messages, which can be extended to integrate with real chatbot services.

### Conclusion
The ChatBot component provides a flexible and easy-to-integrate chat interface for React applications. By following the documentation and understanding the structure of the component and its dependencies, developers can customize and extend the chatbot functionality to fit their needs.






