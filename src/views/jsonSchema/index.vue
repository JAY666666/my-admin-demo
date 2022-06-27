<template>
  <vue-form v-model="formData" :ui-schema="uiSchema" :schema="schema">
  </vue-form>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      formData: {},
      schema: {
        type: "object",
        required: ["userName", "age"],
        properties: {
          userName: {
            type: "string",
            title: "用户名",
            default: "Liu.Jun"
          },
          age: {
            type: "number",
            title: "年龄"
          },
          bio: {
            type: "string",
            title: "签名",
            minLength: 10,
            default: "知道的越多、就知道的越少"
          }
        }
      },
      uiSchema: {
        bio: {
          "ui:options": {
            placeholder: "请输入你的签名",
            type: "textarea",
            rows: 1
          }
        }
      }
    };
  }
};
</script>
