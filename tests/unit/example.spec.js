import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });

    // console.log('iaee');

    expect(1 + 1).toBe(2);
    expect(wrapper.text()).toMatch(msg);
  });
});
