import React from "react";
import "./contact.css";
import {
  Box,
  Text,
  useColorModeValue,
  Image,
  Stack,
  Input,
  Button,
  Textarea,
  useClipboard,
  Tooltip,
  Link,
  IconButton,
  useToast,
} from "@chakra-ui/react";
import { MdPhone, MdEmail } from "react-icons/md";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const { hasCopied, onCopy } = useClipboard("jawedhilmand022@gmail.com");
  const { hasCopy, onCopyMo } = useClipboard("+91 827176683");
  const [state, handleSubmit, ResetFunction] = useForm("mzbqrgzo");
  const toast = useToast();
  if (state.succeeded) {
    toast({
      title: "Message Send Sucessfully",
      description: "Your message has been sent successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    ResetFunction();
  }
  return (
    <>
      <Box
        name="contact"
        id="contact"
        w={{ base: "100%", md: "100%", lg: "100%" }}
        m={{
          base: "90px auto 0 auto",
          md: "90px auto 0 auto",
          lg: "100px auto 0 auto",
        }}
      >
        <Text
          fontWeight={"500"}
          fontSize={{ base: "30px", md: "30px", lg: "50px" }}
          mb={"15px"}
        >
          Feel free to reach out to me
        </Text>
        <Box
          // eslint-disable-next-line react-hooks/rules-of-hooks
          bg={useColorModeValue("gray.100", "blue.800")}
          borderRadius={"10px"}
          p={"20px"}
          w={{ base: "90%", md: "85%", lg: "80%" }}
          display={"grid"}
          gridTemplateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(2,1fr)",
          }}
          m={"auto"}
          gap={"20px"}
        >
          <Box>
            <Image
              src={
                "https://debobrota-haldar.netlify.app/static/media/contact.ec03def613ffe59fb4ce334fcc107c2e.svg"
              }
            />
          </Box>
          <Box display={"flex"} gap={"10px"}>
            <Stack>
              <Link
                id="contact-github"
                href="https://github.com/mdjawedh022"
                target={"blank"}
              >
                <IconButton fontSize="3xl" icon={<BsGithub />} isRound />
              </Link>

              <Link
                id="contact-linkedin"
                href="https://www.linkedin.com/in/md-jawed/"
                target={"blank"}
              >
                <IconButton fontSize="2xl" icon={<BsLinkedin />} isRound />
              </Link>

              <Text id="contact-email" label="jawedhilmand022@gmail.com">
                {" "}
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    fontSize="3xl"
                    icon={<MdEmail />}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>
              </Text>
              <Text id="contact-phone" label="+91 8271766683">
                <Tooltip
                  label={hasCopy ? "Mobile no Copied!" : "+91 8271766683"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    //  id="contact-phone"
                    fontSize="3xl"
                    icon={<MdPhone />}
                    onClick={onCopyMo}
                    isRound
                  />
                </Tooltip>
              </Text>
            </Stack>
            <form onSubmit={handleSubmit}>
              <Stack
                spacing={3}
                w={{ base: "100%", md: "95%", lg: "125%" }}
                borderWidth={"1px"}
                p={"15px"}
                color={"black"}
                bg={useColorModeValue("white", "white")}
                borderRadius={"10px"}
              >
                <Input
                  placeholder="Name.."
                  borderColor={"gray.800"}
                  type="text"
                  name="name"
                  id="name"
                  _hover={{ border: "1px solid blue.500" }}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <Input
                  _hover={{ border: "1px solid blue.500" }}
                  placeholder="Email.."
                  type="email"
                  name="email"
                  borderColor={"gray.800"}
                  id="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <Textarea
                  _hover={{ border: "1px solid blue.500" }}
                  placeholder="Messages.."
                  height={"120px"}
                  border={"1px solid black"}
                  name="message"
                  id="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <Button
                  type="submit"
                  border={"1px solid black"}
                  disabled={state.submitting}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
