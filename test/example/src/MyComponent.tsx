import { useEffect, useState } from "react";

export const MyComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [color, setColor] = useState<undefined | string>(undefined);

  // loads during 50ms then finds the color with getElementById(getElementById("itsSupposeToBeRed")

  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById("thisIsSupposeToBeRed");
      const styles = element ? getComputedStyle(element) : { color: undefined };
      setColor(styles.color);
      setIsLoading(false);
    }, 50);
  }, []);

  return <div>The color of the element is: {color}</div>;
};
