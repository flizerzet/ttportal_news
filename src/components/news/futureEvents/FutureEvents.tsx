import {
  faBirthdayCake,
  faCalendarDay,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../../ui/icons/Icon";
import { events } from "./futureEvents.data";
import { formatTimestamp, getTime } from "../../../utilities/formatDate";

export const FutureEvents = () => {
  return (
    <section className="mb-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-dark-gray">
          Ближайшие события
        </h3>
        <a href="#" className="text-sm hover:underline hover-brand-red-text">
          Все события
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((e, idx) => {
          return (
            idx < 3 && (
              <div
                key={e.id}
                className="border-l-4 border-gray-200 hover:border-[#e30613] pl-4 py-2 event-card transition duration-200"
              >
                <div className="flex items-start">
                  <div className="brand-red-bg text-white p-2 rounded mr-3 w-8 h-10 flex items-center justify-center">
                    {e.type === "other" ? (
                      <Icon icon={faCalendarDay} />
                    ) : e.type === "party" ? (
                      <Icon icon={faBirthdayCake} />
                    ) : (
                      <Icon icon={faChalkboardTeacher} />
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium text-dark-gray mb-1">
                      {e.title}
                    </h4>
                    <p className="text-sm text-gray-500 mb-1">
                      {formatTimestamp(e.timestamp)} • {getTime(e.timestamp)}
                    </p>
                    <p className="text-sm text-gray-600">{e.location}</p>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </section>
  );
};
