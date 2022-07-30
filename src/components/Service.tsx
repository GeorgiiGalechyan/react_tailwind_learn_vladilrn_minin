import { useState } from 'react'
import { IService } from '../models/models'

interface ServiceProps {
  service: IService
}

export function Service({ service }: ServiceProps) {
  const [details, setDetails] = useState(false)

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 ">
      <img
        src={service.image.imageUrl}
        className="w-1/6 mx-auto"
        alt={service.image.imageAlt}
      />

      <p>{service.title}</p>

      <p className="font-bold">{service.price}</p>

      <button
        className="py-2 px-4 border bg-yellow-400"
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? 'Скрыть описание' : 'Подробнее'}
      </button>

      {details && (
        <div>
          <p>{service.description}</p>
        </div>
      )}
    </div>
  )
}
