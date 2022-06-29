import './categories.styles.scss'
import Directory from './components/directory/directory.component';

const App = () => {
  const categories = [
    {
      id: 1,
      title: "GPUs",
      imageUrl: 'https://i.ibb.co/rfph3B2/F-20201230135856-TD1906.jpg'
    },
    {
      id: 2,
      title: "Motherboards",
      imageUrl: 'https://i.ibb.co/rvqCDC0/MSI-MPG-Carbon-Z690-main-1024x683.jpg'
    },
    {
      id: 3,
      title: "CPUs",
      imageUrl: 'https://i.ibb.co/zGT4bZm/4d789af8b759f3d0f424475abcfab840.png'
    },
    {
      id: 4,
      title: "RAM",
      imageUrl: 'https://i.ibb.co/FVzZvKZ/960x0.jpg'
    },
    {
      id: 5,
      title: "Hard Drives",
      imageUrl: 'https://i.ibb.co/KhHnYZ8/5bdc388d91f6773a179306cdda03dcd35094742cec21ba082632b2b99c60d26b.jpg'
    },
    {
      id: 6,
      title: "PC Power Supply Units",
      imageUrl: 'https://i.ibb.co/tYfRCg0/Gaming-PC-Power-Supply-Asus-ROG-Thor-1024x682.jpg'
    },
  ]
  return (
      <Directory categories={categories}/>
  );
}
export default App;
