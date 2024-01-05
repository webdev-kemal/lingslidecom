import React, { useState, useContext } from "react";
import { IntlProvider } from "react-intl";
import French from "../lang/fr.json";
import Turkish from "../lang/tr.json";
import English from "../lang/en.json";
import Spanish from "../lang/es.json";
import { Select } from "@chakra-ui/react";

export const Context = React.createContext();

export const SelectLanguage = () => {
  const context = useContext(Context);
  return (
    <Select
      color={"white"}
      size="sm"
      border={"none"}
      maxW={"65px"}
      bg="transparent"
      value={context.locale}
      onChange={context.selectLanguage}
    >
      <option style={{ backgroundColor: "#13163C" }} value="tr">
        TR
      </option>
      <option style={{ backgroundColor: "#13163C" }} value="en">
        EN
      </option>
      <option style={{ backgroundColor: "#13163C" }} value="es">
        ES
      </option>
      <option style={{ backgroundColor: "#13163C" }} value="fr">
        FR
      </option>
    </Select>
  );
};

const local = navigator.language;

let lang;
if (local === "en") {
  lang = English;
} else if (local === "fr") {
  lang = French;
} else if (local === "es") {
  lang = Spanish;
} else {
  lang = Turkish;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);

  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
    } else {
      if (newLocale === "fr") {
        setMessages(French);
      } else {
        if (newLocale === "tr") {
          setMessages(Turkish);
        } else {
          if (newLocale === "es") {
            setMessages(Spanish);
          }
        }
      }
    }
  }

  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
