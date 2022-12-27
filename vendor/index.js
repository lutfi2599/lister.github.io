"use strict";

fetch(
  "https://script.googleusercontent.com/macros/echo?user_content_key=5SP-NTsd2RmJFzofOXpf9D6qpqQ55lBJY9rjVIfF_5wjSRvlpfiAQL_1wAG4cb1caPoaC6O6jAYM8WDLn7t2j_fPWmCIDSQ6m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOuvrHGMjqfFjoIj-1IBg5clQmfjF4fDW6nMb9-YWiKJaiWTmf1wdf-hhnnNvIorCrsIX_afqV8Nw_Gy9UQ9R38_V9PzChRa4Q&lib=MrcfTkp2dT_KEiiZxMil_5d-ogQrA5nHA"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const dataSet1 = [
      data.content.map((content, index) =>
        index === 19 ? $.parseHTML(content) : content
      ),
    ];
    const dataHeader = data.content[0].map((content) => ({ title: content }));

    const tabledata = dataSet1[0];

    function arrayMove(array, indexAwal, indexTujuan) {
      const element = array[indexAwal];
      array.splice(indexAwal, 1);
      array.splice(indexTujuan, 0, element);
      return array;
    }

    // console.info(tabledata);
    // console.info(dataHeader);

    $(document).ready(function () {
      // $("#example thead tr")
      //   .clone(true)
      //   .addClass("filters")
      //   .appendTo("#example thead");

      $("#example").DataTable({
        responsive: true,
        dom: 'rtip',
        data: tabledata.slice(1).map((content) => {
          // console.log(content);
          const element1 = arrayMove(content, 0, 0);
          const element2 = arrayMove(element1, 1, 1);
          const element3 = arrayMove(element2, 10, 2);
          const element4 = arrayMove(element3, 11, 3);
          const element5 = arrayMove(element4, 12, 4);
          const element6 = arrayMove(element5, 19, 6);
          const element7 = arrayMove(element6, 20, 7);
          const element8 = arrayMove(element7, 21, 8);
          return element8;
        }),
        columns: [
          { title: "ISSN" },
          { title: "Nama Jurnal" },
          { title: "Peringkat" },
          { title: "Coverage" },
          { title: "APC" },
          { title: "Pengelola" },
          { title: "Website" },
          { title: "Google Schoolar" },
          { title: "Template" },
        ],
        //     orderCellsTop: true,
        //     fixedHeader: true,
        //     initComplete: function () {
        //       var api = this.api();

        //       // For each column
        //       api
        //         .columns()
        //         .eq(0)
        //         .each(function (colIdx) {
        //           // Set the header cell to contain the input element
        //           var cell = $(".filters th").eq(
        //             $(api.column(colIdx).header()).index()
        //           );
        //           var title = $(cell).text();
        //           $(cell).html('<input type="text" placeholder="' + title + '" />');

        //           // On every keypress in this input
        //           $(
        //             "input",
        //             $(".filters th").eq($(api.column(colIdx).header()).index())
        //           )
        //             .off("keyup change")
        //             .on("change", function (e) {
        //               // Get the search value
        //               $(this).attr("title", $(this).val());
        //               var regexr = "({search})"; //$(this).parents('th').find('select').val();

        //               var cursorPosition = this.selectionStart;
        //               // Search the column for that value
        //               api
        //                 .column(colIdx)
        //                 .search(
        //                   this.value != ""
        //                     ? regexr.replace("{search}", "(((" + this.value + ")))")
        //                     : "",
        //                   this.value != "",
        //                   this.value == ""
        //                 )
        //                 .draw();
        //             })
        //             .on("keyup", function (e) {
        //               e.stopPropagation();

        //               $(this).trigger("change");
        //               $(this)
        //                 .focus()[0]
        //                 .setSelectionRange(cursorPosition, cursorPosition);
        //             });
        //         });
        //     },
        //   });
        // });
        // console.log(dataHeader[0]);
        // let tr = data.content.reduce((prev, cur) => {
        //   let td = cur.map((e) => `<td>${e}</td>`);
        //   return prev + `<tr>${td.join("")}</tr>`;
        // }, "\r");
        // document.querySelector("tbody").innerHTML = tr;
        // document.querySelector("thead").innerHTML = trr;
      });
    });
  });
