

require 'sqlite3'
require 'json'

def sql2json(file, table)
  db = SQLite3::Database.new(file)
  res = []

  
  sql = db.execute("SELECT * FROM sqlite_master where name='#{table}'")[0].last
  cols = []
  sql.scan(/(\w+) (\w+)?/)[2..-1].each  do |col|
    cols << col
  end
  cols.delete(["PRIMARY","KEY"])
  puts "Columns in table #{table}:\n #{cols}"

  
  
  db.execute("select * from #{table}") do |row|
    one_row = {}
    row.length.times do |i|
      if cols[i][1] == "INTEGER" or cols[i][1] == "NUMERIC"        
        one_row[cols[i][0]] = row[i].to_i
      else
        one_row[cols[i][0]] = row[i]
      end
    end
    res << one_row
  end


  puts res.to_json
end

if __FILE__ == $0
  sql2json(ARGV[0],ARGV[1])
end
    

  
    
  
