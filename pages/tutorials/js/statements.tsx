import React from "react";
import CodeBlock from "@/components/organisms/CodeBlock";
import styled from "styled-components";

function Statements() {
  const Tag = styled.span`
    background-color: #222;
    color: #aaa;
    border-radius: 0.25rem;
    padding: 0 0.5rem;
  `;

  const LiTags = styled.div`
    padding: 0.67rem;
    list-style: 1rem;

    li {
      margin-bottom: 0.5rem;
    }
  `;

  interface Content {
    title: string;
    description: string;
    items: any;
  }

  const content: Content = {
    title: "Операторы",
    description: `В JavaScript операторы (или Statements) представляют собой команды, 
        которые выполняют определенные действия. Они являются основными операторами в программе.`,
    items: [
      {
        title: "Объявление переменных:",
        description: (
          <>
            <Tag>let</Tag>, <Tag>const</Tag>, <Tag>var</Tag> — используются для
            создания переменных.
          </>
        ),
        subItems: [
          {
            code: `
          let age = 25;
          const name = "Alice";
        `,
          },
        ],
      },
      {
        title: "Условные операторы:",
        description: (
          <>
            <Tag>if</Tag>, <Tag>else if</Tag>, <Tag>else</Tag> — проверяют
            условия и выполняют блоки кода, если условия истинны или ложны.
          </>
        ),
        subItems: [
          {
            code: `
           if (age > 18) {
              console.log("Взрослый");
           } else {  
              console.log("Несовершеннолетний");
           }  
        `,
          },
        ],
      },
      {
        title: "Тернарный оператор",
        description: (
          <>
            Тернарный оператор <Tag>? :</Tag> — сокращенный способ записи
            условий.
          </>
        ),
        subItems: [
          {
            code: `
          let возраст = 20; 
          let сообщение = (возраст >= 18) ? "Взрослый" : "Несовершеннолетний";
          console.log(сообщение);`,
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>switch</Tag>
          </>
        ),
        description: (
          <>
            Оператор <Tag>switch</Tag> используется для выбора одного из
            нескольких блоков кода в зависимости от значения переменной.
          </>
        ),
        subItems: [
          {
            code: `
          let день = 3;

          switch (день) {
          case 1:
            console.log("Понедельник");
            break;
          case 2:
            console.log("Вторник");
            break;
          case 3:
            console.log("Среда");
            break;
          default:
            console.log("Неизвестный день");
            }
            `,
          },
        ],
      },
      {
        title: "Циклы",
        description: (
          <>
            Циклы позволяют выполнять блок кода несколько раз: &nbsp;
            <Tag>for</Tag>, <Tag>while</Tag>, <Tag>do...while</Tag>.
          </>
        ),
        subItems: [
          {
            subTitle: (
              <>
                Цикл <Tag>for</Tag>
              </>
            ),
            code: `
             for (let i = 0; i < 5; i++) {
              console.log("Итерация номер", i);
              }`,
            subDescription: (
              <>
                <Tag>for</Tag> — цикл с известным числом итераций.
              </>
            ),
          },
          {
            subTitle: (
              <>
                Цикл <Tag>while</Tag>
              </>
            ),
            code: `
            let i = 0;
            while (i < 5) {
              console.log("Итерация номер", i);
              i++;
            }
                   `,
          },
          {
            subTitle: (
              <>
                Цикл <Tag>do...while</Tag>
              </>
            ),
            code: `
            let i = 0;
            do {
              console.log("Итерация номер", i);
              i++;
            } while (i < 5);
                   `,
            subDescription: (
              <>
                <Tag>do...while</Tag> — цикл, который выполняется хотя бы один
                раз, даже если условие сразу ложно.
              </>
            ),
          },
        ],
      },
      {
        title: (
          <>
            Оператор <Tag>return</Tag>
          </>
        ),
        description: (
          <>
            <Tag>return</Tag> завершает выполнение функции и возвращает значение
          </>
        ),
        code: `
      function приветствие(имя) {
      return \`Привет, \${имя}\`; // Correct string interpolation
    }
    console.log(приветствие("Алексей"));
        `,
        subItems: [],
      },
      {
        title: (
          <>
            Оператор <Tag>try...catch</Tag>
          </>
        ),
        description: (
          <>
            Используется для обработки ошибок. В блоке <Tag>try </Tag> находится
            код, который может вызвать ошибку, а в блоке <Tag>catch </Tag> —
            обработка этой ошибки.
          </>
        ),
        code: `
        try {
        let результат = несуществующаяФункция();
        } catch (ошибка) {
         console.log("Произошла ошибка", ошибка);
         }
      `,
        subItems: [],
      },
      {
        title: <>Функции с параметрами по умолчанию</>,
        description: (
          <>
            Параметры функций могут иметь значения по умолчанию, которые будут
            использованы, если соответствующие аргументы не переданы при вызове
            функции.
          </>
        ),
        code: `
        function приветствие(имя = "гость") {
         return \`Привет, \${имя}\`;
         }
         console.log(приветствие()); // Привет, гость
         console.log(приветствие("Алексей")); // Привет, Алексей
      `,
        subItems: [],
      },
      {
        title: <>Логические операторы</>,
        description: (
          <>
            Логические операторы: <Tag>&& (and) </Tag>,<Tag>| | (or) </Tag>, и
            <Tag>! (no)</Tag> — используются для работы с булевыми значениями.
          </>
        ),
        code: `
        let возраст = 20;
        let студент = true;

        if (возраст > 18 && студент) {
        console.log("Студент-совершеннолетний");
        }

        if (возраст > 18 || студент) {
        console.log("Либо совершеннолетний, либо студент");
        }
        console.log(!студент); // Ложь, так как переменная студент = true

      `,
        subItems: [],
      },
      {
        code: `
          
            Эти операторы и конструкции являются основными средствами для
            управления потоком выполнения программы в JavaScript. Они позволяют
            создавать гибкие и адаптируемые приложения, выполняющие различные
            действия в зависимости от условий и логики. 
          
        `,
      },
    ],
  };

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  `;

  const ImageWrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 450px;
    height: 450px;
    margin-left: 70%;
  `;

  const Star = styled.div`
    width: 0;
    height: 0;
    border-right: 100px solid transparent;
    border-bottom: 200px solid gold;
    border-left: 100px solid transparent;
    position: relative;

    &::before {
      width: 0;
      height: 0;
      border-top: 200px solid gold;
      border-right: 100px solid transparent;
      border-bottom: 0 solid transparent;
      border-left: 100px solid transparent;
      position: absolute;
      content: "";
      top: 75px;
      left: -100px;
    }
  `;

  return (
    <Container>
      <ImageWrapper>
        <Star />
      </ImageWrapper>

      <h1>{content.title}</h1>
      <p>{content.description}</p>
      {content.items.map((item, i) => (
        <div key={i + item.title}>
          <h2>
            {i + 1}. {item.title}
          </h2>
          <p>{item.description}</p>
          {item.subItems && item.subItems.length > 0
            ? item.subItems.map((subItem, i2) => (
                <div key={i + i2 + `subItem`}>
                  {subItem.subTitle && <h3>{subItem.subTitle}</h3>}
                  <CodeBlock code={subItem.code} language="typescript" />
                  {subItem.subDescription && <p>{subItem.subDescription}</p>}
                </div>
              ))
            : // If no subItems, just render the code directly
              item.code && <CodeBlock code={item.code} language="typescript" />}
        </div>
      ))}
    </Container>
  );
}

export default Statements;

/*
 Нет, управляющие конструкции (такие как if, switch, циклы и т. д.) не являются операторами в JavaScript, хотя они тоже влияют на поведение программы. Давайте разберемся, чем они отличаются и почему их нельзя считать операторами.
Операторы и управляющие конструкции — в чем разница?

    Операторы в JavaScript — это специальные символы или ключевые слова, которые выполняют операции над значениями или переменными. Они могут изменять значения или возвращать результат. Например:
        Арифметические операторы: +, -, *, /, %
        Операторы присваивания: =, +=, -=, *=, /=
        Операторы сравнения: ==, ===, !=, >, <, >=, <=
        Логические операторы: &&, ||, !

    Эти операторы выполняют определенные действия с данными и возвращают результат.

    Управляющие конструкции (или управляющие операторы) — это блоки кода, которые управляют потоком выполнения программы, но они не выполняют операции с данными. Например:
        Условные операторы: if, else if, else, switch
        Циклы: for, while, do...while
        Обработка ошибок: try...catch, finally
        Оператор возврата: return

    Эти конструкции не возвращают значение, а определяют, как и в каком порядке будет выполняться код.

Пример:

    Оператор: let x = 5 + 3;
    Это выражение использует арифметический оператор + для сложения двух чисел.

    Управляющая конструкция:

    if (x > 0) {
      console.log("x больше нуля");
    }

    Здесь используется условная конструкция if, которая выполняет блок кода, если условие истинно.

Почему управляющие конструкции не операторы?

    Операторы всегда выполняют действия и возвращают результат, тогда как управляющие конструкции определяют порядок выполнения кода.
    Операторы могут быть частью выражений (например, 5 + 3), в то время как управляющие конструкции не являются выражениями. Например, код с циклом или условием не возвращает значения, а только управляет тем, какой код будет выполнен.

Заключение:

Управляющие конструкции, такие как if, switch, циклы и другие, не являются операторами, потому что они не выполняют операции с данными и не возвращают результат. Они служат для управления потоком выполнения программы. Операторы же изменяют значения и возвращают результаты вычислений.

Надеюсь, это объяснение прояснило различие между операторами и управляющими конструкциями! Если есть дополнительные вопросы, не стесняйся спрашивать! 😊
 */
