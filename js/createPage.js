(function ($) {
  $.fn.extend({
    // 扩展页面函数
    appendElement: function (item) {
      let parentClass = toArrClass(item.parentClass)[0]
      let childElementContainerClass = toArrClass(item.childElementContainerClass)[0]
      let childElementClass = toArrClass(item.childElementClass)[0]
      // 按文档类型扩展页面
      switch (item.childElementType) {
        case 0:
          let codeStr1 = `<div id=${item.id} class=${parentClass}>
                          <label for=${item.childElementId}>${item.itemName}</label>
                          <div class=${childElementContainerClass}>
                            <input
                              type="text"
                              class=${childElementClass}
                              id=${item.childElementId}
                              placeholder="请输入"
                            />
                          </div>
                        </div>`
          $(this).append(codeStr1)
          addClassFn(item)
          break
        case 1:
          let codeStr2 = `<div id=${item.id} class=${parentClass}>
                              <label for=${item.childElementId}>${item.itemName}</label>
                              <div class=${childElementContainerClass}>
                                  <div class="selectContainer">
                                    <div id=${item.childElementId}>
                                      <span>请选择</span>
                                      <span class=${childElementClass}></span>
                                    </div>
                                  </div>
                              </div>
                          </div>`
          $(this).append(codeStr2)
          addClassFn(item)
          break
        case 2:
          let codeStr3 = `<div id=${item.id} class=${parentClass}>
                            <label for=${item.childElementId}>${item.itemName}</label>
                            <div class=${childElementContainerClass}>
                                <div class="tableContainer">
                                    <table class=${childElementClass}>
                                        <tr>
                                            <th>${item.childTableTh[0]}</th>
                                            <th>${item.childTableTh[1]}</th>
                                            <th>${item.childTableTh[2]}</th>
                                            <th>${item.childTableTh[3]}</th>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                          </div>`
          $(this).append(codeStr3)
          addClassFn(item)
          break
        case 3:
          let codeStr4 = `<div id=${item.id} class=${parentClass}>
                            <label for=${item.childElementId}>${item.itemName}</label>
                            <div class=${childElementContainerClass}>
                                <textarea
                                    type="textarea"
                                    class=${childElementClass}
                                    id=${item.childElementId}
                                    placeholder="请输入"
                                ></textarea>
                            </div>
                          </div>`
          $(this).append(codeStr4)
          addClassFn(item)
          break
      }
    }
  })
  // 将类按空格转换为数组
  function toArrClass(className) {
    let arr = className.split(' ')
    return arr
  }
  // 添加类工具函数
  function addClassFn(item) {
    let parentClassArr = toArrClass(item.parentClass)
    let childElementContainerClassArr = toArrClass(item.childElementContainerClass)
    let childElementClass = toArrClass(item.childElementClass)
    classFn(item, parentClassArr)
    classFn(item, childElementContainerClassArr)
    classFn(item, childElementClass)
  }
  // 添加类
  function classFn(item, arr) {
    if (arr.length > 1) {
      $(`#${item.id}.${arr[0]}`).addClass(arr[1])
      $(`#${item.id} .${arr[0]}`).addClass(arr[1])
    }
  }

})(jQuery)