import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RALColor {
  code: string;
  name: string;
  hex: string;
}

const ralColors: RALColor[] = [
  { code: "RAL 1000", name: "Зелёно-бежевый", hex: "#BEBD7F" },
  { code: "RAL 1001", name: "Бежевый", hex: "#C2B078" },
  { code: "RAL 1002", name: "Песочно-жёлтый", hex: "#C6A664" },
  { code: "RAL 1003", name: "Сигнальный жёлтый", hex: "#E5BE01" },
  { code: "RAL 1004", name: "Золотисто-жёлтый", hex: "#CDA434" },
  { code: "RAL 2000", name: "Жёлто-оранжевый", hex: "#ED760E" },
  { code: "RAL 2001", name: "Красно-оранжевый", hex: "#C93C20" },
  { code: "RAL 2002", name: "Алый", hex: "#CB2821" },
  { code: "RAL 2003", name: "Пастельно-оранжевый", hex: "#FF7514" },
  { code: "RAL 2004", name: "Чистый оранжевый", hex: "#F44611" },
  { code: "RAL 3000", name: "Огненно-красный", hex: "#AF2B1E" },
  { code: "RAL 3001", name: "Сигнальный красный", hex: "#A52019" },
  { code: "RAL 3002", name: "Карминно-красный", hex: "#A2231D" },
  { code: "RAL 3003", name: "Рубиново-красный", hex: "#9B111E" },
  { code: "RAL 3004", name: "Пурпурно-красный", hex: "#75151E" },
  { code: "RAL 4000", name: "Сине-лиловый", hex: "#814F63" },
  { code: "RAL 4001", name: "Красно-лиловый", hex: "#6D3F5B" },
  { code: "RAL 4002", name: "Красно-фиолетовый", hex: "#922B3E" },
  { code: "RAL 5000", name: "Фиолетово-синий", hex: "#354D73" },
  { code: "RAL 5001", name: "Зелёно-синий", hex: "#1F3A93" },
  { code: "RAL 5002", name: "Ультрамариново-синий", hex: "#20214F" },
  { code: "RAL 5003", name: "Сапфирово-синий", hex: "#1D1E33" },
  { code: "RAL 5004", name: "Чёрно-синий", hex: "#18171C" },
  { code: "RAL 5005", name: "Сигнальный синий", hex: "#1E2460" },
  { code: "RAL 6000", name: "Патиново-зелёный", hex: "#316650" },
  { code: "RAL 6001", name: "Изумрудно-зелёный", hex: "#287233" },
  { code: "RAL 6002", name: "Лиственно-зелёный", hex: "#2D5016" },
  { code: "RAL 6003", name: "Оливково-зелёный", hex: "#424632" },
  { code: "RAL 6004", name: "Сине-зелёный", hex: "#1F3A93" },
  { code: "RAL 6005", name: "Зелёный мох", hex: "#2F4538" },
  { code: "RAL 7000", name: "Серая белка", hex: "#78858B" },
  { code: "RAL 7001", name: "Серебристо-серый", hex: "#8A9597" },
  { code: "RAL 7002", name: "Оливково-серый", hex: "#7E7B52" },
  { code: "RAL 7003", name: "Серый мох", hex: "#6C7059" },
  { code: "RAL 7004", name: "Сигнальный серый", hex: "#969992" },
  { code: "RAL 7005", name: "Мышино-серый", hex: "#646B63" },
  { code: "RAL 7006", name: "Бежево-серый", hex: "#6D6552" },
  { code: "RAL 8000", name: "Зелёно-коричневый", hex: "#826C34" },
  { code: "RAL 8001", name: "Охра коричневая", hex: "#955F20" },
  { code: "RAL 8002", name: "Сигнальный коричневый", hex: "#6C3B2A" },
  { code: "RAL 8003", name: "Глиняный коричневый", hex: "#734222" },
  { code: "RAL 8004", name: "Медно-коричневый", hex: "#8E402A" },
  { code: "RAL 9001", name: "Кремово-белый", hex: "#FDF4E3" },
  { code: "RAL 9002", name: "Светло-серый", hex: "#E7EBDA" },
  { code: "RAL 9003", name: "Сигнальный белый", hex: "#F4F4F4" },
  { code: "RAL 9004", name: "Сигнальный чёрный", hex: "#282828" },
  { code: "RAL 9005", name: "Глубоко-чёрный", hex: "#0A0A0A" },
  { code: "RAL 9010", name: "Чисто-белый", hex: "#FFFFFF" },
  { code: "RAL 9011", name: "Графитно-чёрный", hex: "#1C1C1C" },
];

interface RALColorSelectorProps {
  selectedColor: RALColor | null;
  onColorSelect: (color: RALColor) => void;
}

const RALColorSelector = ({
  selectedColor,
  onColorSelect,
}: RALColorSelectorProps) => {
  const [showAllColors, setShowAllColors] = useState(false);

  const popularColors = ralColors.filter((color) =>
    [
      "RAL 9003",
      "RAL 9004",
      "RAL 6005",
      "RAL 5005",
      "RAL 3001",
      "RAL 1003",
      "RAL 7004",
    ].includes(color.code),
  );

  const displayColors = showAllColors ? ralColors : popularColors;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-montserrat">
          Выбор цвета RAL
        </CardTitle>
        {selectedColor && (
          <div className="flex items-center gap-3 mt-2">
            <div
              className="w-8 h-8 rounded border-2 border-gray-300"
              style={{ backgroundColor: selectedColor.hex }}
            />
            <div>
              <div className="font-semibold">{selectedColor.code}</div>
              <div className="text-sm text-gray-600">{selectedColor.name}</div>
            </div>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {displayColors.map((color) => (
            <button
              key={color.code}
              onClick={() => onColorSelect(color)}
              className={`w-8 h-8 rounded border-2 hover:scale-110 transition-transform ${
                selectedColor?.code === color.code
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color.hex }}
              title={`${color.code} - ${color.name}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => setShowAllColors(!showAllColors)}
          className="w-full"
        >
          {showAllColors ? "Показать популярные" : "Показать все цвета RAL"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default RALColorSelector;
export type { RALColor };
