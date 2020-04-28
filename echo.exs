defmodule Echo do
  def start do
    spawn(&loop/0)
  end

  def call(pid, msg) do
    send(pid, {self(), msg})

    receive do
      msg ->
        msg
    end
  end

  defp loop do
    receive do
      {from, message} when is_pid(from) ->
        send(from, message)
        loop()
    end
  end
end
