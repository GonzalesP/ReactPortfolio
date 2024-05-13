// the Screen component is a wrapper component that makes syntax easier to follow
// it is the "root" <div> of all screens (HomeScreen, AboutScreen, etc.)
export default function Screen({ children }) {
  return <div>{children}</div>
}