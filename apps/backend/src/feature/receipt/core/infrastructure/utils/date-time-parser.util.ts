export class DateTimeParser {
  static parseAlbanianDateTime(date?: string, time?: string): Date | undefined {
    if (!date) return undefined;

    const dateMatch = date.match(/(\d{2})-(\d{2})-(\d{4})/);
    if (!dateMatch) return undefined;

    const [_, day, month, year] = dateMatch;
    const timeMatch = time?.match(/(\d{2}):(\d{2})/);

    const hours = timeMatch ? timeMatch[1] : '12';
    const minutes = timeMatch ? timeMatch[2] : '00';

    const isoString = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    const parsed = new Date(isoString);

    return isNaN(parsed.getTime()) ? undefined : parsed;
  }

  static parseGenericDateTime(date?: string, time?: string): Date | undefined {
    if (!date) return undefined;

    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) return undefined;

    if (time) {
      const timeMatch = time.match(/(\d{2}):(\d{2})/);
      if (timeMatch) {
        parsed.setHours(parseInt(timeMatch[1], 10));
        parsed.setMinutes(parseInt(timeMatch[2], 10));
      }
    }

    return parsed;
  }
}
