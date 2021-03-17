import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    // console.log("iaee");
    // console.log("iaee");

    expect(2 + 1).toBe(3);
    expect(wrapper.text()).toMatch(msg);
  });
});
