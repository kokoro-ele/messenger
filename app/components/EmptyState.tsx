/*
 * @Author: kokoro
 * @Date: 2023-06-01 23:30:01
 * @LastEditors: kokoro
 * @LastEditTime: 2023-06-01 23:40:34
 * @Description: 请填写简介
 */

const EmptyState = () => {
  return (
    <div
      className="
    flex
    justify-center
    items-center
    h-full
    px-4
    sm:px-6
    lg:px-8
    bg-gray-100
    py-10
    "
    >
      <div
        className="
        text-center
        items-center
        flex
        flex-col
        "
      >
        <h3
          className="
          mt-2
          text-2xl
          font-semibold
          text-gray-900
          "
        >
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};

export default EmptyState;
