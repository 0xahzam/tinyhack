import { useToast } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function BannerToast() {
  const [state, setState] = useState(undefined);
  const toast = useToast();

  useEffect(() => {
    if (state) {
      const { message, status } = state;

      toast({
        title: status,
        description: message,
        status: status,
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  }, [state, toast]);

  return [state, setState];
}