import { useCallback } from "react";
import { Box, Stack, Text, TextInput } from "@sanity/ui";
import { StringInputProps, set, unset } from "sanity";

const ListPicker = (props: StringInputProps) => {
  const { onChange, value = "" } = props;

  // ⬇ We aren't doing anything with these except forwarding them to our input.

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(
        event.currentTarget.value ? set(event.currentTarget.value) : unset()
      ),
    [onChange]
  );

  return (
    <Stack space={2}>
      <TextInput {...props} onChange={handleChange} value={value} />
      <Text muted size={1}>
        Words: {value?.split(" ").length || 0}, Characters: {value?.length || 0}
      </Text>
    </Stack>
  );
};

export default ListPicker;
