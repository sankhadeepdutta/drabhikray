export default function SocialIcons(props) {
  return (
    <a href={props.link}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="grey"
        class={props.class}
        viewBox="0 0 16 16"
      >
        <path d={props.path} />
      </svg>
    </a>
  );
}
