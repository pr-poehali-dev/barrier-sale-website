import { RALColor } from "./RALColorSelector";

interface BarrierGatePreviewProps {
  selectedColor: RALColor | null;
  gateType: "automatic" | "manual" | "industrial";
}

const BarrierGatePreview = ({
  selectedColor,
  gateType,
}: BarrierGatePreviewProps) => {
  const baseColor = selectedColor?.hex || "#4A5568";

  const gateConfigs = {
    automatic: { width: 240, height: 180, armLength: 120 },
    manual: { width: 200, height: 160, armLength: 100 },
    industrial: { width: 280, height: 200, armLength: 140 },
  };

  const config = gateConfigs[gateType];

  return (
    <div className="bg-gradient-to-b from-sky-100 to-sky-200 p-8 rounded-lg">
      <div className="flex justify-center items-end">
        <svg
          width={config.width}
          height={config.height}
          viewBox={`0 0 ${config.width} ${config.height}`}
          className="drop-shadow-lg"
        >
          {/* Основание */}
          <rect
            x="80"
            y={config.height - 40}
            width="80"
            height="40"
            fill={baseColor}
            stroke="#2D3748"
            strokeWidth="2"
          />

          {/* Стойка */}
          <rect
            x="110"
            y="40"
            width="20"
            height={config.height - 80}
            fill={baseColor}
            stroke="#2D3748"
            strokeWidth="2"
          />

          {/* Верхний блок управления */}
          <rect
            x="100"
            y="30"
            width="40"
            height="20"
            fill={baseColor}
            stroke="#2D3748"
            strokeWidth="2"
            rx="4"
          />

          {/* Стрела шлагбаума */}
          <rect
            x="140"
            y="45"
            width={config.armLength}
            height="8"
            fill="#FFFFFF"
            stroke="#E2E8F0"
            strokeWidth="2"
            rx="4"
          />

          {/* Красные полосы на стреле */}
          {Array.from({ length: Math.floor(config.armLength / 20) }).map(
            (_, i) => (
              <rect
                key={i}
                x={160 + i * 20}
                y="46"
                width="8"
                height="6"
                fill="#EF4444"
              />
            ),
          )}

          {/* Световые индикаторы */}
          <circle cx="108" cy="35" r="2" fill="#10B981" />
          <circle cx="122" cy="35" r="2" fill="#EF4444" />
          <circle cx="132" cy="35" r="2" fill="#F59E0B" />
        </svg>
      </div>

      <div className="text-center mt-4">
        <div className="text-sm text-gray-600">Предварительный просмотр</div>
        {selectedColor && (
          <div className="text-xs text-gray-500 mt-1">
            Цвет: {selectedColor.code}
          </div>
        )}
      </div>
    </div>
  );
};

export default BarrierGatePreview;
