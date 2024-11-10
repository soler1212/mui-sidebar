# mui-sidebar

## Overview

The `mui-sidebar` is a versatile, responsive sidebar component built using Material UI 5. It provides a seamless user experience (UX) on both small and large screens, ensuring that your application's layout remains consistent across different devices.

The primary goal of this library is to enhance the UX of sidebar responsiveness rather than just offering a UI component. While this project is currently tailored for personal use, contributions and feature requests are welcome. If you need additional features, please create an issue, and I'll address it as soon as possible.

#### Example Layouts
Here are some example layouts demonstrating the responsive behavior of the `mui-sidebar`:
- **Small and Large Screen (Sidebar Closed):** ![Pasted image 20240815195507](https://github.com/user-attachments/assets/85065a01-a823-4d17-aba6-4f180fdb2b6e)

- **Small Screen (Sidebar Opened):** ![Pasted image 20240815195523](https://github.com/user-attachments/assets/6b673fef-52e8-4611-a68b-5ba297dfd465)

- **Large Screen (Sidebar Opened)** ![Pasted image 20240815195629](https://github.com/user-attachments/assets/d97c3389-694c-472c-a4d5-242845d3f805)
## Installation
To install the `mui-sidebar` library, you can use npm. Run the following command in your project directory:

```bash
npm install mui-sidebar
```

This will add `mui-sidebar`(https://www.npmjs.com/package/mui-sidebar) to your project's dependencies, allowing you to easily integrate it into your React application. 
## Available Components
The `MUISidebar` library includes several key components that allow for easy integration and customization within your application:
### Essential Components
- **`<Sidebar>`**  
    The main container for the sidebar. It manages the display and behavior of the sidebar across various screen sizes, automatically adjusting for optimal user experience.
- **`<OuterContainer>`**  
    The container for the main content of your application, excluding the sidebar. This component helps manage the layout outside of the sidebar.
- **`<ContextProvider>`**  
    The context provider that is essential for the sidebar's functionality. It manages the state of the sidebar and makes it accessible to the rest of the components.
### Tool
- **`useSidebarContext`**  
    A custom hook that provides utilities to enhance the sidebar's UX. This hook offers easy access to sidebar-related functions, enabling further customization and extension of the sidebar’s behavior.
### Optional Components
- **`<ButtonOpen>`**  
    A button component that opens the sidebar. This button can be used out of the box or customized according to your design needs.
- **`<ButtonClose>`**  
    A button component that closes the sidebar. This button is typically placed within the sidebar for easy access by users.
- **`<ListItem>`**  
    A list item component designed for elements within the sidebar. It is ideal for navigation links or other list-based content.

## Sidebar Component

The `<Sidebar>` component is capable of rendering either a `Drawer` or `SwipeableDrawer` depending on the screen size and user interaction. It intelligently adjusts its mode and appearance based on the device, ensuring a consistent and responsive layout.

## `useSidebarContext` Properties

The `useSidebarContext` hook provides a set of properties and functions to manage the state and behavior of the `mui-sidebar`. Below is a detailed explanation of each property:
- **`navigationDrawerWidth: number`**  
    Defines the current width of the sidebar (drawer) in pixels. This value can be dynamically adjusted based on the screen size or user preferences.
- **`outerContainerWidth: number`**  
    Specifies the width of the main content area (outside the sidebar) in pixels. This value helps in calculating the overall layout of the application, ensuring that the sidebar and the main content area are properly aligned.
- **`setNavigationDrawerWidth: React.Dispatch<React.SetStateAction<number>>`**  
    A function used to update the width of the sidebar. You can call this function with a new width value to resize the sidebar programmatically. The `setState` function signature ensures that you can pass either a new width directly or a function to calculate it based on the previous state.
- **`isOpen: boolean`**  
    A boolean value indicating whether the sidebar is currently open (`true`) or closed (`false`). This state can be used to conditionally render components or trigger animations based on the sidebar's visibility.
- **`isLargeScreen: boolean`**  
    A boolean value that identifies if the current screen size is considered "large" according to the responsive breakpoints set in the application. This property is useful for adjusting the sidebar's behavior, such as keeping it permanently open on large screens.
- **`toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void`**  
    A function to toggle the sidebar open or closed. This function accepts a boolean (`open`) that determines the desired state of the sidebar. It returns another function that handles the triggering event, which can be either a keyboard or mouse event. This setup allows for flexible and accessible control of the sidebar, ensuring that it can be toggled through various user interactions.
## Usage Example
Here's a simplified example of how to use the `mui-sidebar` components within your application.
### SidebarMenu Component
The `SidebarMenu` component represents the contents of the sidebar. It includes the following key elements:

- **Context Access**: The component uses the `useSidebarContext` hook to access the current state of the sidebar, particularly whether the screen is large or small. This allows for conditional rendering based on screen size.
    
- **Structure**:
    
    - A `Toolbar` that holds a title ("I don't know Rick") and a close button (`Sidebar.ButtonClose`) that only appears on smaller screens.
    - A `List` that contains `Sidebar.ListItem` components, each representing a navigational item in the sidebar. These items include a URL, text, subtitle, and an icon.

This component is designed to be flexible and easily customizable, allowing you to replace the list items, change the icons, or modify the structure to fit your application's needs.
```jsx
export const SidebarMenu: React.FC = () => {
  const { isLargeScreen } = Sidebar.useSidebarContext();
  return (
    <Sidebar>
      <Toolbar>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          style={{ width: "100%" }}
        >
          <Typography>I don't know Rick</Typography>
          {!isLargeScreen && <Sidebar.ButtonClose />}
        </Stack>
      </Toolbar>
      <Divider />
      <List component="nav">
        <Sidebar.ListItem
          url="/visit-lobezno"
          text="Lobezno"
          subtitle="Be carefull so strong..."
          icon={<Difference />}
        />
        <Sidebar.ListItem
          url="/visit-deadpool"
          text="Deadpool"
          subtitle="Be carefull so rude..."
          icon={<CollectionsBookmark />}
        />
      </List>
    </Sidebar>
  );
};

export default SidebarMenu;
```
### Root Page
The `Root` component represents the main structure of your application. It sets up the context for the `mui-sidebar` and defines the layout outside of the sidebar.

- **Context Provider**: The `Sidebar.ContextProvider` component wraps the entire application. It initializes the sidebar settings, such as whether the sidebar is initially open or closed on large screens. This context provider is crucial for managing the state and behavior of the sidebar throughout your application.
    
- **Layout Structure**:
    
    - The `HeaderBar` component is included to display the app's header.
    - The `Sidebar.OuterContainer` wraps the main content of your application that resides outside the sidebar, ensuring that the layout adjusts correctly depending on the sidebar's state.

This structure provides a clear separation of concerns, making it easy to manage the sidebar and the rest of the application's layout independently.
```jsx
<Sidebar.ContextProvider largeScreenSettings={{initalOpen: false}}>
	<HeaderBar />
	<Sidebar.OuterContainer>
		area outside the sidebar
    </Sidebar.OuterContainer>
</Sidebar.ContextProvider>
```
### AppBar Component (HeaderBar)
The `HeaderBar` component is a fixed app bar that serves as the top navigation or header for your application. It interacts with the `MUISidebar` and contains the following features:

- **Context Access**: Similar to the `SidebarMenu`, this component uses the `useSidebarContext` hook to determine whether the sidebar is open or closed and to identify the screen size.
    
- **Responsive Interaction**:
    
    - When the sidebar is closed, a button (`Sidebar.ButtonOpen`) is displayed to allow users to open the sidebar.
    - When the sidebar is open, a close button (`Sidebar.ButtonClose`) is displayed for easy closure.
- **Header Content**:
    
    - The `AppBar` includes a `Toolbar` with a title ("Hello") centered within it, ensuring a clean and organized header.

This component demonstrates how to integrate the sidebar controls directly into the app's header
```jsx
...
const { isLargeScreen, isOpen } = Sidebar.useSidebarContext();
...
<AppBar position="fixed">
	<Sidebar.OuterContainer>
	  <Toolbar>
		{ !isOpen && <Sidebar.ButtonOpen /> }
		{ isOpen && <Sidebar.ButtonClose /> }
		<Box sx={{ width: "100%" }}>
		  <Typography
			variant="h6"
			component="h1"
		  >	
			hello
		  </Typography>
		</Box>
	  </Toolbar>
	</Sidebar.OuterContainer>
</AppBar>

<SidebarMenu />
```
### Summary
These examples together illustrate how to set up a responsive sidebar in a React application using the `mui-sidebar` library. The `SidebarMenu` defines the contents of the sidebar, the `Root` component sets up the overall layout and context, and the `HeaderBar` integrates sidebar controls into the app's header. By following this structure, you can create a responsive and intuitive sidebar experience that adapts to different screen sizes and user interactions.
## Roadmap
The following is a roadmap outlining the future objectives for the `mui-sidebar` library. Please note that while these features are planned, this project is not my primary focus, so there may be some delays in their implementation. However, contributions and feedback are always welcome!
### Planned Features and Improvements
-  **Expand Sidebar Flow Support**  
    Enhance the `mui-sidebar` to support all sidebar flows available in Material UI 5. This will ensure full compatibility and provide users with a wider range of options for sidebar behavior and interaction.
-  **Enhance UI Elements (The optional components)**  
    Improve the optional UI elements provided by the `mui-sidebar` library, such as buttons and list items. This could include refining styles, adding customization options, and ensuring consistency with Material UI design principles.
### Contributions and Timeline
Given that this is a side project, the timeline for these features is flexible. If there are specific features or improvements you would like to see prioritized, please feel free to open an issue or submit a pull request. Your input can help shape the future development of the library!
